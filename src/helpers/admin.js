class Authadmin{
    requireAuth(req, res, next){
        if (!req.session.userId) {
            // Redireciona o usuário para a página de login se ele não estiver autenticado
            res.redirect('/');
        } else {
            // Permite que o usuário acesse a rota protegida se ele estiver autenticado
            next();
        }
    }

    eAdmin(req, res, next){
        if(req.params.id == 25) return next();
        return res.send({data: 'Permissão negada!'})
    }

    authHome(req, res, next){
        if (!req.session.userId) {
            next();
        }else{
            res.redirect('/home');
        }
    }

}

module.exports = new Authadmin()