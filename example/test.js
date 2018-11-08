var client_id="Er0aw7oqY6-farmcp2";
var username="yg4s6S7GDg2EgrTXMh5C3zN1ETGpMMVP";
var nexgear = new Nexgear.create({client_id,username});

function connect(){
  nexgear.connect();
}
function disconnect(){
  nexgear.disconnect();
}

// nexgear.subscribe("@msg/TT",(res)=>{
//   console.log('subscribe callback');
//   console.log(res);
// });
// nexgear.unsubscribe("TTT",(res)=>{
//   console.log('unsubscribe callback');
//   console.log(res);
// });

//event
nexgear.on('connect',(res)=>{
  console.log(nexgear.isconnected())
  console.log('connect');
  console.log(res);

  nexgear.subscribe("@msg/nexgear",(res)=>{
    console.log('subscribe callback');
    console.log(res);
  });
  nexgear.unsubscribe("@msg/nexgear_un",(res)=>{
    console.log('unsubscribe callback');
    console.log(res);
  });
})

nexgear.on('reconnect',(res)=>{
  console.log('reconnect');
  console.log(res);
})
nexgear.on('connectionLost',(res)=>{
  console.log('connectionLost');
  console.log(res);
  nexgear.reconnect(5000);
})

nexgear.on('connectFailure',(res)=>{
  console.log('connectFailure');
  console.log(res);
})
nexgear.on('packetsend',(res)=>{
  console.log('packetsend');
  console.log(res);
})
nexgear.on('packetreceive',(res)=>{
  console.log('packetreceive');
  console.log(res);
})
nexgear.on('error',(res)=>{
  console.log('error')
  console.log(res)
})

function publish(){
  nexgear.publish('@msg/nexgear','hello world',true,(res)=>{
    console.log('publish callback');
    console.log(res);
  })
}
