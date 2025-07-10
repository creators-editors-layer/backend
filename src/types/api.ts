export interface ApiSuccess<T>{
    success:true,
    data:T
}

export interface ApiError{
    success:false,
    error:{
        message:string;
        code?:number;
    }
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;
