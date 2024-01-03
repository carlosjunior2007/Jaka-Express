import {Router} from 'express';

const router = Router();

// Enlasando las paginas a la principal
router.get('/',(req,res)=> res.render('index'))
router.get('/contact',(req,res)=> res.render('Contact'))

router.use((req,res)=>res.render('404'))

export default router;