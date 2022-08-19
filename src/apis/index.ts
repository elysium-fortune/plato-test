export const fetchData = async (url:string) => {
    try {
        const apiResponse = await fetch(url);
        return apiResponse;
    } catch (error) {
        console.log(error)
    }
}