const BASE = "https://api.nasa.gov";
const KEY = import.meta.env.VITE_NASA_API_KEY || "DEMO_KEY";

// Interface para tipagem da resposta APOD
export interface APODData {
  date: string;
  title: string;
  explanation: string;
  url: string;
  hdurl?: string;
  media_type: string;
  thumbnail_url?: string;
  service_version?: string;
  copyright?: string;
}

/**
 * Busca a APOD (Astronomy Picture of the Day) para uma data específica.
 * Retorna null caso não haja imagem ou haja erro.
 */
export async function fetchAPOD(date?: string): Promise<APODData | null> {
  const params = new URLSearchParams({ 
    api_key: KEY,
    thumbs: 'true' // Para incluir thumbnails em vídeos
  });
  
  if (date) params.append("date", date);

  const url = `${BASE}/planetary/apod?${params.toString()}`;

  try {
    const res = await fetch(url);
    
    if (!res.ok) {
      // Tratamento específico para limites
      if (res.status === 429) {
        console.error("Limite de requisições excedido");
        throw new Error("Limite de requisições excedido. Tente novamente em uma hora.");
      }
      if (res.status === 404) {
        console.error(`APOD não encontrada para a data ${date}`);
        return null;
      }
      
      console.error(`Erro ${res.status} para ${date}:`, res.statusText);
      return null;
    }
    
    const data = await res.json();
    
    // Verifica se é uma resposta de erro da NASA
    if (data.error || data.msg) {
      console.error(`Erro na resposta da NASA para ${date}:`, data.error || data.msg);
      return null;
    }
    
    return data;
  } catch (err) {
    console.error(`Erro ao buscar APOD para ${date}:`, err);
    return null;
  }
}

/**
 * Busca fotos de um rover (Curiosity, Opportunity ou Spirit) para uma data na Terra.
 * Retorna array vazio em caso de erro.
 */
export async function fetchRoverPhotos(rover: string, earth_date?: string) {
  const params = new URLSearchParams({ api_key: KEY });
  if (earth_date) params.append("earth_date", earth_date);

  const url = `${BASE}/mars-photos/api/v1/rovers/${rover}/photos?${params.toString()}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Erro na API do Rover ${rover} para a data ${earth_date}:`, res.status, res.statusText);
      return [];
    }
    const data = await res.json();
    return data.photos || [];
  } catch (err) {
    console.error(`Erro ao buscar fotos do Rover ${rover} para a data ${earth_date}:`, err);
    return [];
  }
}

/**
 * Busca múltiplas APODs para um array de datas com delay entre requisições
 */
export async function fetchMultipleAPODs(dates: string[], delayMs: number = 500): Promise<APODData[]> {
  const results: APODData[] = [];
  
  for (let i = 0; i < dates.length; i++) {
    if (i > 0) {
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
    
    const apod = await fetchAPOD(dates[i]);
    if (apod) {
      results.push(apod);
    }
  }
  
  return results;
}