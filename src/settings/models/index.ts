export interface Setting{
    id?: number;
    name?: string;
    value?: string;
    type?: string;
}

export interface SaveLogin_Contract{
    login: Setting;
}

export interface SavePass_Contract{
    pass: Setting;
}

export interface GetLogin_Contract{
    settingName: string;
}