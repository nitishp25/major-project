const labelMap = {
    1:{name:'Letter A', color:'green'},
    2:{name:'Letter B', color:'green'},
    3:{name:'Letter C', color:'green'},
    4:{name:'Letter D', color:'green'},
    5:{name:'Letter E', color:'green'},
    6:{name:'Letter F', color:'green'},
    7:{name:'Letter G', color:'green'},
    8:{name:'Letter H', color:'green'},
    9:{name:'Letter I', color:'green'},
    10:{name:'Letter J', color:'green'},
    11:{name:'Letter K', color:'green'},
    12:{name:'Letter L', color:'green'},
    13:{name:'Letter M', color:'green'},
    14:{name:'Letter N', color:'green'},
    15:{name:'Letter O', color:'green'},
    16:{name:'Letter P', color:'green'},
    17:{name:'Letter Q', color:'green'},
    18:{name:'Letter R', color:'green'},
    19:{name:'Letter S', color:'green'},
    20:{name:'Letter T', color:'green'},
    21:{name:'Letter U', color:'green'},
    22:{name:'Letter V', color:'green'},
    23:{name:'Letter W', color:'green'},
    24:{name:'Letter X', color:'green'},
    25:{name:'Letter Y', color:'green'},
    26:{name:'Letter Z', color:'green'},
}

export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    //for(let i=0; i<=boxes.length; i++){
        if(boxes[0] && classes[0] && scores[0]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[0]
            const text = classes[0]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[0]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
            ctx.stroke()
        }
    //}
}