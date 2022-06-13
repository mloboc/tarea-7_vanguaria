export const Imagen = (ciudad: string) => {
    switch (ciudad) {
        case "San Pedro Sula":
            return "https://pbs.twimg.com/media/Ex-EIdfXMAEe0C8.jpg";
        case "London":
            return "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE";
        case "Paris":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/640px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg";
        case "New York":
            return "https://phantom-telva.unidadeditorial.es/9e2e8719466cb80e2bccb4f0d72df157/crop/28x0/1146x674/resize/828/f/jpg/assets/multimedia/imagenes/2020/02/03/15807464503946.jpg";
        case "Tokyo":
            return "https://m.n.com.do/wp-content/uploads/2020/04/3009_01.jpg";
        case "Sydney":
            return "https://cdn.britannica.com/96/100196-050-C92064E0/Sydney-Opera-House-Port-Jackson.jpg"
        default:
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png";
    }
}