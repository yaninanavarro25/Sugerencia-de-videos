let Iifee = (() =>{
    let asignarVideo = (url, id) =>{
        let element = document.getElementById(id);
        element.setAttribute('src', url);
    }
    return{
        mostrarVideo: (url, id) => asignarVideo(url, id)
    }
})();


class Multimedia{
    constructor(url){
        let _url = url;
        this.getUrl = function(){
            return _url;
        }
    }
    get url(){
        return this.getUrl();

    }
    setInicio(){
        return "Este metodo es para realizar un cambio en la URL del video"
    }
}
class Reproductor extends Multimedia{
    constructor(url, id){
        super(url);
        let _id = id;
        this.getId = () => _id;
    }
    playMultimedia(){
        Iifee.mostrarVideo(this.url, this.getId());
    }
    setInicio(tiempo){
        let element = document.getElementById(this.getId());
        element.setAttribute('src',`${this.url}?start=${tiempo}`);
    }
}
let playMusic = new Reproductor('https://www.youtube.com/watch?v=Eo-KmOd3i7s', 'musica');
playMusic.playMultimedia();
playMusic.setInicio(300);
let playMovies = new Reproductor('https://www.youtube.com/watch?v=xiC2iXTXHxw', 'peliculas');
playMovies.playMultimedia();
playMovies.setInicio(300)
let playSeries = new Reproductor('https://www.youtube.com/watch?v=4QIbLY2ZOAU', 'series')
playSeries.playMultimedia();
playSeries.setInicio(300);