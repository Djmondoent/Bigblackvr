/** ----------------------------------------------------------------------
 * Created by PC-TEDDY-2 on 03/10/2018.
 */

var popup = {
  default: {
    position: "0 6 100",
    scale: "0.7 0.7 0.7",
    title: "title ---------",
    description: "description ---------",
    popup: "2",
    popup_question: "3.5",
    popup_talk: "3.5",
    popup_audio: "1.5",
  },

  character_1: {
    position: "0 5 150",
    scale: "0.7 0.7 0.7",
    title: "Birdy",
    description: "Je me demande sur quelle planÃ¨te on a encore atterri? ",
  },
};

/** --------------------------------------------------------------------------------------------- */
/** --------------------------------------------------------------------------------------------- */

var audio = {
  default: {
    title: "0 - ---------------",
    image: "assets/audioguide/audio.png",

    loadingText: "Chargement ...",
    loadingImage: "assets/audioguide/audioguide_loading.png",

    networkText: "Connexion au serveur ...",
    networkTextSuccess: "Connexion RÃ©ussi ! ",
    networkTextFail: "Echec de la connexion ! ",
    networkTextClientConnected: " utilisateur(s) connectÃ©(s) ",
    networkImage: "assets/audioguide/audioguide_network.png",
    networkImageSuccess: "assets/audioguide/audioguide_network_success.png",
    networkImageFail: "assets/audioguide/audioguide_network_fail.png",
    networkUsers: "assets/audioguide/audioguide_users.png",

    info: [
      "Appuyez sur 'barre espace' pour zoomer sur l'Ã©cran de l'audioguide.",
      "Cette planÃ¨te est une demo technique du WebXR, particules, Ã©clairage, animations...",
      "Fonctionne sur les navigateurs Chrome, Firefox, Safari ou Edge.",
      "Moins de 5mo Ã  tÃ©lÃ©charger pour commencer la visite.",
      "Le WebXR est une technologie qui permet de crÃ©er des expÃ©riences VR et AR sur le Web.",
      "Vous pouvez y naviguer depuis un casque VR tel que l'Oculus Quest ou le HTC VIVE.",
      "Le projet est aussi accessible sur mobile.",
      "Utilisez le 'warplink' pour visiter un autre monde.",
    ],
    infoImage: "assets/audioguide/audioguide_info.png",

    descriptions: "AjoutÃ© Ã  votre audioguide !",
    sound_ambiance: "assets/sounds/ambiance.mp3",
    sound_character: "assets/sounds/character.mp3",
  },

  // audio_1: {
  //   title: "1 - Karnak",
  //   sound: "assets/sounds/sound_1.mp3",
  // },
};
