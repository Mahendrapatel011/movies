export const GetMoviesData=async()=>{
    try{
       const respons= fetch(
            "https://www.omdbapi.com/?s=avengers&apikey=baad5987"
        );
        const Data=(await respons).json();
        return Data;
    }
    catch(error){
        console.log(error);
    }
}
