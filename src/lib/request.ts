export default async function apiRequest(url: string, method: "GET" | "POST" = "GET", body: any = null) {
    const r = await fetch(url, {
        method,
        // headers: { "Accept-Encoding": "gzip/deflate", "Content-Type": "application/json"},
        body
    });
    if( r.ok ) {
        return r.json();
    }
    else {
        throw new Error(r.statusText);
    }
}