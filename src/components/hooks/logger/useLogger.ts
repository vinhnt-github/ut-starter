export function useLogger() {
    const logger = (message: string) => {
        console.log(message);
    };

    return logger;
}