<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Powerful Lifts</title>
    @vite('resources/js/app.jsx')
    <meta name="description" content="Bienvenue sur Powerful Lifts, votre application de suivi dédiée aux pratiquant(e)s de force athlétique et de powerlifting. Profitez d'une expérience personnalisée avec Powerful Lifts.">

</head>
<body>
    <h1>Bienvenue sur Powerful Lifts</h1>
    <h2>Votre application personalisée pour la pratique du powerlifting et de la force athlétique</h2>
    <div>
        <h3>Veuillez vous connecter ou vous inscrire.</h3>
        <div>
            <a href="{{route('login')}}"><button>Se connecter</button></a>
            <a href="{{route('signup')}}"><button>Créer un compte</button></a>
        </div>
    </div>
</body>
</html>
