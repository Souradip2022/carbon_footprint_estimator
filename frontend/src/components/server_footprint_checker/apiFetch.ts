"use server"

export async function apiFetch(urlVal: string): Promise<any> {
  try {
    console.log("Server fetch")
    const dataResponse = await fetch(`https://api.websitecarbon.com/site?url=${urlVal}`);
    const data = await dataResponse.json();
    console.log(data.statistics);
    if (!data?.statistics || !data) {
      throw new Error("Invalid URL data");
    }
    return data;
  }
  catch(error: any){
    console.warn(error.message)
  }

}