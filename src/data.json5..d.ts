declare module "*.json5" {
    const value: {
        globalData: {
            [key: string]: string
        },
        movies: {
            [key: string]: any
        }
    }
    export default value
}