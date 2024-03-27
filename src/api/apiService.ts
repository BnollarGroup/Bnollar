interface RequestOptions {
    method: 'GET' | 'POST';
    body?: object;
}

export async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
    }
    return response.json();
}

export async function postData<T>(url: string, data: object, contentType: string): Promise<T> {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': contentType,
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(`Failed to post data to ${url}`);
    }
    return response.json();
}

export async function request<T>(url: string, options: RequestOptions, contentType: string): Promise<T> {
    const { method, body } = options;
    if (method === 'GET') {
        return fetchData<T>(url);
    } else if (method === 'POST') {
        return postData<T>(url, body || {}, contentType);
    } else {
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
}
