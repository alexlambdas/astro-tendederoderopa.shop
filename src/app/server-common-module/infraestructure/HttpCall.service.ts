/**
 * 
 * @param url 
 * @returns 
 */
export async function fnHttpCall<T>(url: string): Promise<T>{
  return (await fetch(url)).json();
}