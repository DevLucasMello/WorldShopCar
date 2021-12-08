export class LocalStorageUtils{

    public salvarDadosLocaisUsuario(response: any) {
        this.salvarTokenUsuario(response.accessToken);
        this.salvarUsuario(response.userToken);
    }

    public salvarUsuario(user: string) {
        localStorage.setItem('wsc.user', JSON.stringify(user));
    }

    public salvarTokenUsuario(token: string) {
        localStorage.setItem('wsc.token', token);
    }
    
    public obterUsuario() {
        return JSON.parse(localStorage.getItem('wsc.user'));
    }

    public obterTokenUsuario(): string {
        return localStorage.getItem('wsc.token');
    }

    public limparDadosLocaisUsuario() {
        localStorage.removeItem('wsc.token');
        localStorage.removeItem('wsc.user');
    }
}
