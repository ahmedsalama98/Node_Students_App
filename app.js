const yargs = require('yargs')



yargs.command({
    command:'add',
    describe:'',
    builder:{
        name:{
            describe:'',
            type:'array',
            demandOption:true,
        }
    }
    ,
    handler:(argv)=>{

        console.log( argv.name)
    }
})


yargs.parse()