import app  from "./app.js";

const main = () =>{
    const PORT = app.get("PORT");

    app.listen(PORT, "0.0.0.0",() =>{
        console.log(`Servidor en puerto ${PORT}`);
    });
}

main();

