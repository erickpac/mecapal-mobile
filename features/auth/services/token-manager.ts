class TokenManager {
  private static token: string | null = null;

  static setToken(token: string) {
    this.token = token;
  }

  static getToken(): string | null {
    return this.token;
  }

  static clearToken() {
    this.token = null;
  }

  static hasToken(): boolean {
    return this.token !== null;
  }
}

export default TokenManager;
