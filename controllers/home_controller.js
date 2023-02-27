module.exports.home = (req,res)=>{
    console.log(req.cookies);
    res.cookie('roll_no',7019);
    res.render('home',{
        title : 'Home'
    });
}