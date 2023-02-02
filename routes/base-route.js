const express = require('express');
const router = express.Router();
const path = require('path');
const { get_redirect, text_overflow_ellipsis } = require("../global");

const posts = [
  {
    title:
      "Les meilleures pratiques pour la conception d'interface utilisateur mobile",
    content:
      "La conception d'interface utilisateur est l'une des parties les plus importantes du développement d'une application mobile. Les utilisateurs attendent une expérience fluide et intuitive avec les applications qu'ils utilisent, et une mauvaise conception peut entraîner un abandon rapide de l'application. Pour créer une bonne expérience utilisateur, les développeurs doivent tenir compte de l'ergonomie, de la lisibilité et de la cohérence dans la conception de l'interface utilisateur. Il est également important d'utiliser les conventions et les styles de la plateforme cible pour garantir une expérience cohérente pour les utilisateurs.",
  },
  {
    title: "Comment optimiser les performances d'une application mobile ?",
    content:
      "Les performances de l'application peuvent avoir un impact important sur son succès auprès des utilisateurs. Les applications lentes ou qui plantent peuvent être abandonnées rapidement. Pour optimiser les performances, les développeurs peuvent minimiser les requêtes réseau, utiliser des images et des graphismes légers, utiliser des animations fluides et éviter les opérations intensives pour le processeur. Il est également important de tester régulièrement les performances de l'application pour détecter et corriger les problèmes de performance à un stade précoce.",
  },
  {
    title: "L'importance de la sécurité pour les applications mobiles ?",
    content:
      "La sécurité est une préoccupation majeure pour les applications mobiles, en raison de la nature personnelle et souvent sensible des données qu'elles gèrent. Les développeurs doivent prendre en compte les menaces potentielles, telles que les attaques par piratage, les fuites de données et les exploits de faille de sécurité, et mettre en place des mesures pour les prévenir. Cela peut inclure l'utilisation de cryptage pour les données sensibles, la vérification des autorisations d'application et l'authentification forte pour les utilisateurs. Les développeurs doivent également surveiller régulièrement les vulnérabilités de sécurité pour garantir la sécurité continue de l'application.",
  },
  {
    title:
      "Les défis du développement multiplateforme et comment les surmonter ?",
    content:
      "Le développement multiplateforme consiste à créer une application qui fonctionne sur plusieurs plates-formes, telles que iOS et Android. Cela peut offrir une portée plus large pour l'application, mais cela peut également présenter des défis techniques. Les développeurs doivent prendre en compte les différences de plate-forme, telles que les différences dans les systèmes d'exploitation, les écrans et les fonctionnalités, pour s'assurer que l'application fonctionne de manière cohérente sur chaque plate-forme. Les différences dans les styles et les conventions d'interface utilisateur peuvent également être un défi pour les développeurs.",
  },
];

router.use(express.static(path.join(__dirname, "../client/public")));
router.get('/', (req, res) => {
    let posts_with_ellipsis = posts.map((post) => {
        return {
            title: post.title,
            content: text_overflow_ellipsis(post.content)
        }
    });
    res.render("index", { redirect: get_redirect(req), posts: posts_with_ellipsis });
});

module.exports = router;