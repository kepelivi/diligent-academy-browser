window.onload = () => {
    getData().then((data)=>{
        createProductList(data);
    })

    console.log("hello world");
}