class ApiService {
    private baseUrl: string;
  
    constructor() {
      this.baseUrl = "/api/";
    }
  
    private async request(
      url: string,
      method: string,
      data?: object
    ): Promise<any> {
      const requestOptions: RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : undefined,
      };
  
      try {
        const response = await fetch(`${this.baseUrl}/${url}`, requestOptions);
        const responseData = await response.json();
  
        if (!response.ok) {
          console.log(response || "Request failed");
        }
        return responseData;
      } catch (error: any) {
        console.log(error);
      }
    }
  
    async get(url: string): Promise<any> {
      return this.request(url, "GET");
    }
  
    async post(url: string, data: object): Promise<any> {
      return this.request(url, "POST", data);
    }
  
    async put(url: string, data: object): Promise<any> {
      return this.request(url, "PUT", data);
    }
  
    async delete(url: string): Promise<any> {
      return this.request(url, "DELETE");
    }
  }
  
  export const Service = new ApiService();
  