export interface IState {
    [key: string]: any
}

export interface IModule {
    [key: string]: IOtpions
}

export interface IEffect {
    [key: string]: any
}

export interface IOtpions {
    state: any;
    reducers: any;
    effects?: IEffect,
    modules?: IModule
}
