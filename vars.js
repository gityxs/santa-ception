var h4b={'t3':"Giftwrapper drops 1 golden gift more each time",'e2':"Toy Thief",'p3':"Multi",'l3':"upgrades",'p2':"GiftWrapper",'f2':"double robot production",'s2':"achievs",'B2':7500,'V2':"Golden gifts come 1 minute faster",'q2':"double giftwrapper production",'h2':"Forklift",'m3':"Duplicator",'L2':"alien",'t2':"double planet production",'l2':"Factory",'j2':5E13,'o2':"double conveyor production",'u3':100,'H2':200,'a3':"double vortex production",'y2':"Vortex",'Q2':"double duplicator production",'S2':"vortex",'c2':"klik",'O2':"robot",'T2':"duplicator",'K2':"+10% gift production",'u2':"Giftwrapper",'b3':"double:2",'I2':"factory",'N2':"multi",'f3':"ception",'J2':"toy thief",'i2':"double elf production",'G2':150,'v2':"50% extra toys when clicking",'A2':"double forklift production",'P2':"gift",'n3':"item:conveyor",'i3':"buildingTotal",'M2':"leech",'F2':1.10,'o3':"item:toy machine",'C2':"global",'R2':"conveyor",'e3':"Robot",'s3':"goldengift",'h3':"25% extra toys when clicking",'w2':"Planet",'r3':false,'g2':"klik:2",'v3':"supersanta:1",'g3':"+1% of your total production each klik",'n2':"item:elf",'c3':"planet",'U2':"forklift",'D2':"gifts:1",'x2':5E4,'E2':"gifts:2",'Y2':"buildingExact",'Z2':"double toy thieves production",'k3':"buildingAll",'d2':"Toy Machine",'r2':"double factory production",'b2':"giftwrapper",'d3':"Unlock 100% of your Santasperience",'z2':"santasperience",'X2':true,'m2':500,'w3':"elf",'W2':"Conveyor",'k2':"upgrade",'q3':"toy machine",'j3':"double toymachine production"};var stats={resource:0,resourceMade:0,resourceByKliks:0,resourceLastReset:0,resourceTotalReset:0,kliks:0,kliksTotal:0,specialKliks:0,specialKliksTotal:0,ception:0,giftPower:0,newStart:h4b.X2,seenAliens:h4b.r3,minutes:-1,driehoekspuntwaarde:50000,fbLiker:h4b.r3,fbLikeShows:0,},counters={autoSave:0,toymachines:0,elves:0},rewards=["straf:0",h4b.n2,h4b.n2,h4b.D2,h4b.D2,"item:robot","item:robot",h4b.v3,h4b.v3,h4b.E2,h4b.E2,h4b.b3,h4b.b3,h4b.n3,h4b.n3,h4b.g2,h4b.g2,"extratime:1","straf:1","gifts:3","gifts:3",h4b.n2,h4b.n2,h4b.D2,h4b.D2,h4b.v3,h4b.v3,h4b.g2,h4b.g2,h4b.o3,h4b.o3,h4b.E2,h4b.E2,h4b.b3,h4b.b3,"straf:0"];bonus={klikMultiAan:h4b.r3,klikMulti:1,supersanta:h4b.r3,};var timerSpecial=new Date(),sessionStart=new Date(),lastMinute=new Date(),lastClick=new Date(),settings={animations:h4b.X2,},items={Elf:{id:0,variables:[0],static:["Elf",0.1,10,'items/elf.png','Santa&rsquo;s most loyal helper',h4b.X2,"Elf",0],counter:0},Conveyor:{id:1,variables:[0],static:[h4b.W2,0.4,80,'items/conveyor.png','Must be boring to be a conveyor',h4b.r3,"Elf",1]},ToyMachine:{id:2,variables:[0],static:[h4b.d2,3,400,'items/toymachine_icon.png','Magic? Or are there elves in the machine?',h4b.r3,h4b.W2,1]},Robot:{id:3,variables:[0],static:[h4b.e3,8,2500,'items/robot.png','0111001001101111011000100110111101110100',h4b.X2,h4b.d2,1],counter:0},GiftWrapper:{id:4,variables:[0],static:[h4b.u2,40,1E4,'items/wrapper.png','What&rsquo;s up with the gold ones?',h4b.X2,h4b.e3,1],counter:0},Forklift:{id:5,variables:[0],static:[h4b.h2,h4b.G2,h4b.x2,'items/forklift.png','Does it even lift?',h4b.X2,h4b.u2,1],counter:0},ToyThief:{id:6,variables:[0],static:[h4b.e2,400,15E4,'items/thief.png','Community service in Santaland',h4b.X2,h4b.h2,1],counter:0},Duplicator:{id:7,variables:[0],static:[h4b.m3,75E2,175E4,'items/duplicater.png','Duplicates all but Santa himself',h4b.X2,h4b.e2,1],counter:0},VortexMachine:{id:8,variables:[0],static:[h4b.y2,1E5,125E6,'items/vortex.png','Even Santa can&rsquo;t comprehend this',h4b.X2,h4b.m3,1],counter:0},Factory:{id:9,variables:[0],static:[h4b.l2,1E6,4E9,'items/factory.png','Abandoned cookie factory',h4b.X2,h4b.y2,1],counter:0},Planet:{id:10,variables:[0],static:[h4b.w2,1E7,1E11,'items/planet.png','For when earth is full',h4b.X2,h4b.l2,1],counter:0},};items.Elf.action=function(){setElves();};items.ToyMachine.action=function(){setToymachines();};items.Conveyor.action=function(){zetEersteBand();};items.Robot.action=function(){setRobot();};items.GiftWrapper.action=function(){setGiftWrapper();};items.Forklift.action=function(){setClark();};items.ToyThief.action=function(){setThief();};items.Duplicator.action=function(){setDuplicator();};items.VortexMachine.action=function(){setVortex();};items.Factory.action=function(){};items.Planet.action=function(){};var elfLocaties=["75:205","150:205","225:205","300:205","375:205","450:205","525:205","600:205","675:205","675:335","600:335","300:335","225:335","300:425","225:425"],upgrades={upgradeKlik1:{id:0,variables:[0],static:["Read the manual",h4b.H2,h4b.c2,h4b.c2,20,"add",.1,0,"add 0.1 toys for each item you have when clicking","Who the hell reads this anyway","click1.png"]},upgradeKlik2:{id:1,variables:[0],static:["Brush and Dustpan",5E3,h4b.c2,h4b.c2,h4b.u3,h4b.M2,1,0,h4b.g3,"Clean the gifts fallen from the machines","click4.png"]},upgradeKlik3:{id:2,variables:[0],static:["Sugar Rush",10000,h4b.c2,h4b.c2,250,"add",1,0,"add 1 toys for each item you have when clicking","Way to much candy yesterday","click2.png"]},upgradeKlik4:{id:3,variables:[0],static:["Motivational posters",25E4,h4b.c2,h4b.c2,h4b.m2,h4b.M2,1,0,h4b.g3,"Better work atmosphere","click8.png"]},upgradeKlik5:{id:4,variables:[0],static:["Toy machine for dummies",1E6,h4b.c2,h4b.c2,750,h4b.N2,1.25,0,h4b.h3,"Looks a lot like the manual","click3.png"]},upgradeKlik6:{id:5,variables:[0],static:["Intranet",1E8,h4b.c2,h4b.c2,1000,h4b.M2,1,0,h4b.g3,"Your Toy Machine is now connected","click7.png"]},upgradeKlik7:{id:6,variables:[0],static:["Toy machine bootcamp",1E10,h4b.c2,h4b.c2,1500,h4b.N2,1.25,0,h4b.h3,"The only attendant","click5.png"]},upgradeKlik8:{id:7,variables:[0],static:["Leecher",1E12,h4b.c2,h4b.c2,2000,h4b.M2,1,0,h4b.g3,"Leech from other machines","click9.png"]},upgradeKlik9:{id:8,variables:[0],static:["Engineering PHd",1E14,h4b.c2,h4b.c2,2500,h4b.N2,1.5,0,h4b.v2,"Bought Thesis in india with gifts","click6.png"]},upgradeElf1:{id:9,variables:[0],static:["Minifitness",10,h4b.w3,h4b.w3,1,h4b.N2,2,0,h4b.i2,"Nothing they can't handle","elficon1.png"]},upgradeElf2:{id:10,variables:[0],static:["Steroids",50,h4b.w3,h4b.w3,5,h4b.N2,2,0,h4b.i2,"It's all legal in santa land","elficon2.png"]},upgradeElf3:{id:11,variables:[0],static:["Manager Elf",h4b.m2,h4b.w3,h4b.w3,10,h4b.N2,2,0,h4b.i2,"Gets everything done faster","elficon3.png"]},upgradeElf4:{id:12,variables:[0],static:["Dissolve Labor Union",h4b.B2,h4b.w3,h4b.w3,25,h4b.N2,2,0,h4b.i2,"These elves have no rights anymore","elficon4.png"]},upgradeElf5:{id:13,variables:[0],static:["Elf Army",h4b.x2,h4b.w3,h4b.w3,50,h4b.N2,2,0,h4b.i2,"Sir, Yes Sir!","elficon5.png"]},upgradeElf6:{id:14,variables:[0],static:["Chains",2E7,h4b.w3,h4b.w3,h4b.u3,h4b.N2,2,0,h4b.i2,"Nobody leaves their machine","elficon6.png"]},upgradeElf7:{id:15,variables:[0],static:["White powder",h4b.j2,h4b.w3,h4b.w3,h4b.H2,h4b.N2,2,0,h4b.i2,"I thought it was snow!","elficon7.png"]},upgradeConveyor1:{id:16,variables:[0],static:["Improved cogwheels",10,h4b.W2,h4b.W2,1,h4b.N2,2,0,h4b.o2,"These titanium cogwheels won't break","conveyericon1.png"]},upgradeConveyor2:{id:17,variables:[0],static:["Hard Rubber",h4b.m2,h4b.W2,h4b.W2,10,h4b.N2,2,0,h4b.o2,"best rubber on the planet","conveyericon2.png"]},upgradeConveyor3:{id:18,variables:[0],static:["Better grip",h4b.B2,h4b.W2,h4b.W2,25,h4b.N2,2,0,h4b.o2,"Nothing will slip","conveyericon3.png"]},upgradeConveyor4:{id:19,variables:[0],static:["Metal conveyor",h4b.x2,h4b.W2,h4b.W2,50,h4b.N2,2,0,h4b.o2,"No magnetic gifts","conveyericon4.png"]},upgradeConveyor5:{id:20,variables:[0],static:["Borders",2E7,h4b.W2,h4b.W2,h4b.u3,h4b.N2,2,0,h4b.o2,"Stolen from bowling","conveyericon5.png"]},upgradeConveyor6:{id:21,variables:[0],static:["Synchronisation chip",h4b.j2,h4b.W2,h4b.W2,h4b.H2,h4b.N2,2,0,h4b.o2,"Perfectly timed from one to another","conveyericon6.png"]},upgradeToyMachine1:{id:22,variables:[0],static:["Electronic Toys",10,h4b.d2,h4b.d2,1,h4b.N2,2,0,h4b.j3,"Gone with those old-fashioned gifts","toymachineicon1.png"]},upgradeToyMachine2:{id:23,variables:[0],static:["Resource contract",h4b.m2,h4b.d2,h4b.d2,10,h4b.N2,2,0,h4b.j3,"Never run out of toy recources","toymachineicon2.png"]},upgradeToyMachine3:{id:24,variables:[0],static:["Triple core Chipset",h4b.B2,h4b.d2,h4b.d2,25,h4b.N2,2,0,h4b.j3,"Weirdly it's only twice as fast","toymachineicon3.png"]},upgradeToyMachine4:{id:25,variables:[0],static:["Cooling system",h4b.x2,h4b.d2,h4b.d2,50,h4b.N2,2,0,h4b.j3,"Brrr chilly","toymachineicon4.png"]},upgradeToyMachine5:{id:26,variables:[0],static:["3d printing system",2E7,h4b.d2,h4b.d2,h4b.u3,h4b.N2,2,0,h4b.j3,"Where is techonology going?","toymachineicon5.png"]},upgradeToyMachine6:{id:27,variables:[0],static:["Santaware",h4b.j2,h4b.d2,h4b.d2,h4b.H2,h4b.N2,2,0,h4b.j3,"Newest Operation System for toymachines","toymachineicon6.png"]},upgradeRobot1:{id:28,variables:[0],static:["Improved Robotics",10,h4b.e3,h4b.e3,1,h4b.p3,2,0,h4b.f2,"Will this make a new kind of robot?","roboticon1.png"]},upgradeRobot2:{id:29,variables:[0],static:["AI",h4b.m2,h4b.e3,h4b.e3,10,h4b.p3,2,0,h4b.f2,"Learn from your mistakes","roboticon2.png"]},upgradeRobot3:{id:30,variables:[0],static:["Radar Techonology",h4b.B2,h4b.e3,h4b.e3,25,h4b.p3,2,0,h4b.f2,"No gift will escape","roboticon3.png"]},upgradeRobot4:{id:31,variables:[0],static:["Shopping Cart",h4b.x2,h4b.e3,h4b.e3,50,h4b.p3,2,0,h4b.f2,"No more looking for outlets","roboticon4.png"]},upgradeRobot5:{id:32,variables:[0],static:["Nuclear batteries",2E7,h4b.e3,h4b.e3,h4b.u3,h4b.p3,2,0,h4b.f2,"Hmm.. So Soft","roboticon5.png"]},upgradeRobot6:{id:33,variables:[0],static:["Hydraulics",h4b.j2,h4b.e3,h4b.e3,h4b.H2,h4b.p3,2,0,h4b.f2,"How much can you bench?","roboticon6.png"]},upgradeGiftwrapper1:{id:35,variables:[0],static:["Premade Gift Bows",10,h4b.u2,h4b.u2,1,h4b.p3,2,0,h4b.q2,"Just paste it on the gift","wrappericons1.png"]},upgradeGiftwrapper2:{id:76,variables:[0],static:["Improved mechanics",h4b.m2,h4b.p2,h4b.p2,10,h4b.p3,2,0,h4b.q2,"No faulty wrapped gifts anymore","wrappericons2.png"]},upgradeGiftwrapper3:{id:36,variables:[0],static:["Rainbow gifts",h4b.B2,h4b.p2,h4b.p2,25,h4b.p3,2,0,h4b.q2,"Double rainbow what does it mean?","wrappericons3.png"]},upgradeGiftwrapper4:{id:37,variables:[0],static:["Nano gift paper",h4b.x2,h4b.p2,h4b.p2,20,h4b.p3,2,0,h4b.q2,"Doesn't get stuck in the machine","wrappericons4.png"]},upgradeGiftwrapper5:{id:38,variables:[0],static:["Quantum wrapping",2E7,h4b.p2,h4b.p2,h4b.u3,h4b.p3,2,0,h4b.q2,"Newest NASA technology","wrappericons5.png"]},upgradeGiftwrapper6:{id:39,variables:[0],static:["Spray Paint",h4b.j2,h4b.p2,h4b.p2,h4b.H2,h4b.p3,2,0,h4b.q2,"No more wanted level","wrappericons6.png"]},upgradeClark1:{id:40,variables:[0],static:["Automated Guided Vehicle",10,h4b.h2,h4b.h2,1,h4b.p3,2,0,h4b.A2,"Google helped us","forklifticon1.png"]},upgradeClark2:{id:41,variables:[0],static:["Higher lifting",h4b.m2,h4b.h2,h4b.h2,10,h4b.p3,2,0,h4b.A2,"Can you even lift?","forklifticon2.png"]},upgradeClark3:{id:42,variables:[0],static:["Counter Weight",h4b.B2,h4b.h2,h4b.h2,25,h4b.p3,2,0,h4b.A2,"Can handle heavier gifts","forklifticon3.png"]},upgradeClark4:{id:43,variables:[0],static:["Snow Chains",h4b.x2,h4b.h2,h4b.h2,50,h4b.p3,2,0,h4b.A2,"No more slipping of the northpole","forklifticon4.png"]},upgradeClark5:{id:44,variables:[0],static:["Nano batteries",2E7,h4b.h2,h4b.h2,h4b.u3,h4b.p3,2,0,h4b.A2,"More space for gifts","forklifticon5.png"]},upgradeClark6:{id:45,variables:[0],static:["Nitro",h4b.j2,h4b.h2,h4b.h2,h4b.H2,h4b.p3,2,0,h4b.A2,"Need more speed","forklifticon6.png"]},upgradeToyThief1:{id:46,variables:[0],static:["Burglar Tools",10,h4b.e2,h4b.e2,1,h4b.p3,2,0,h4b.Z2,"Now they can enter anywhere","toythieficon1.png"]},upgradeToyThief2:{id:47,variables:[0],static:["Get Out of Jail Free Card",50,h4b.e2,h4b.e2,5,h4b.p3,2,0,h4b.Z2,"Hmm seems there's a card missing in this game","toythieficon2.png"]},upgradeToyThief3:{id:48,variables:[0],static:["Owl Wings",h4b.m2,h4b.e2,h4b.e2,10,h4b.p3,2,0,h4b.Z2,"For a silent approach","toythieficon3.png"]},upgradeToyThief4:{id:49,variables:[0],static:["Night Vision",h4b.B2,h4b.e2,h4b.e2,25,h4b.p3,2,0,h4b.Z2,"Steal 24/7","toythieficon4.png"]},upgradeToyThief5:{id:50,variables:[0],static:["Stealth suit",h4b.x2,h4b.e2,h4b.e2,50,h4b.p3,2,0,h4b.Z2,"Snow camouflage doesn't seem to help inside","toythieficon5.png"]},upgradeToyThief6:{id:51,variables:[0],static:["Magic bag",2E7,h4b.e2,h4b.e2,h4b.u3,h4b.p3,2,0,h4b.Z2,"They can carry more than you can imagine","toythieficon6.png"]},upgradeToyThief7:{id:52,variables:[0],static:["No Conscience",h4b.j2,h4b.e2,h4b.e2,h4b.H2,h4b.p3,2,0,h4b.Z2,"Steal even from children","toythieficon7.png"]},upgradeDuplicator1:{id:53,variables:[0],static:["X-ray Scanner",10,h4b.m3,h4b.m3,1,h4b.p3,2,0,h4b.Q2,"No need to unwrap the gift","duplicatericon1.png"]},upgradeDuplicator2:{id:54,variables:[0],static:["Optic Fiber",h4b.m2,h4b.m3,h4b.m3,10,h4b.p3,2,0,h4b.Q2,"Never out of sync again","duplicatericon2.png"]},upgradeDuplicator3:{id:55,variables:[0],static:["Quantum Printing",h4b.B2,h4b.m3,h4b.m3,25,h4b.p3,2,0,h4b.Q2,"Every atom is duplicated","duplicatericon3.png"]},upgradeDuplicator4:{id:56,variables:[0],static:["Triplicator",h4b.x2,h4b.m3,h4b.m3,50,h4b.p3,2,0,h4b.Q2,"Three times","duplicatericon4.png"]},upgradeDuplicator5:{id:57,variables:[0],static:["Quadruplicator",2E7,h4b.m3,h4b.m3,h4b.u3,h4b.p3,2,0,h4b.Q2,"Four times","duplicatericon5.png"]},upgradeDuplicator6:{id:58,variables:[0],static:["Cache",h4b.j2,h4b.m3,h4b.m3,h4b.H2,h4b.p3,2,0,h4b.Q2,"Gifts are remembered and reproduced","duplicatericon6.png"]},upgradeVortex1:{id:59,variables:[0],static:["Light Lightining",10,h4b.y2,h4b.y2,1,h4b.p3,2,0,h4b.a3,"Bring up the speed of lightning","vortexicon1.png"]},upgradeVortedouble:{id:60,variables:[0],static:["Quantum Vortex",h4b.m2,h4b.y2,h4b.y2,10,h4b.p3,2,0,h4b.a3,"The factory is starting to shake","vortexicon2.png"]},upgradeVortex3:{id:61,variables:[0],static:["Black Hole",h4b.B2,h4b.y2,h4b.y2,25,h4b.p3,2,0,h4b.a3,"Bringing the past presents to the present","vortexicon3.png"]},upgradeVortex4:{id:62,variables:[0],static:["Time Space Converger",h4b.x2,h4b.y2,h4b.y2,50,h4b.p3,2,0,h4b.a3,"bringing the future presents to the present","vortexicon4.png"]},upgradeVortex5:{id:63,variables:[0],static:["Time loop",2E7,h4b.y2,h4b.y2,h4b.u3,h4b.p3,2,0,h4b.a3,"Always the same past present from the future","vortexicon5.png"]},upgradeVortex6:{id:64,variables:[0],static:["Black Worm Hole",h4b.j2,h4b.y2,h4b.y2,h4b.H2,h4b.p3,2,0,h4b.a3,"Warp space, time and gravity","vortexicon6.png"]},upgradeFactory1:{id:65,variables:[0],static:["Factory Manager",10,h4b.l2,h4b.l2,1,h4b.p3,2,0,h4b.r2,"He's ready with the whip","factoryicon1.png"]},upgradeFactory2:{id:66,variables:[0],static:["Santa Fiber",h4b.m2,h4b.l2,h4b.l2,10,h4b.p3,2,0,h4b.r2,"Connect your factories with the speed of light","factoryicon2.png"]},upgradeFactory3:{id:67,variables:[0],static:["Advanced Infrastructure",h4b.B2,h4b.l2,h4b.l2,25,h4b.p3,2,0,h4b.r2,"Everything is connected","factoryicon3.png"]},upgradeFactory4:{id:68,variables:[0],static:["Specialized Factory",h4b.x2,h4b.l2,h4b.l2,50,h4b.p3,2,0,h4b.r2,"Makes only one type of gifts","factoryicon4.png"]},upgradeFactory5:{id:69,variables:[0],static:["Nuclear Factories",2E7,h4b.l2,h4b.l2,h4b.u3,h4b.p3,2,0,h4b.r2,"Only disadvantage is the waste","factoryicon5.png"]},upgradeFactory6:{id:70,variables:[0],static:["Space Factory",h4b.j2,h4b.l2,h4b.l2,h4b.H2,h4b.p3,2,0,h4b.r2,"If place on earth runs out","factoryicon6.png"]},upgradePlanet1:{id:71,variables:[0],static:["Space Reindeer",10,h4b.w2,h4b.w2,1,h4b.p3,2,0,h4b.t2,"Fly between your planets","planeticon1.png"]},upgradePlanet2:{id:72,variables:[0],static:["Planet Manager",h4b.m2,h4b.w2,h4b.w2,10,h4b.p3,2,0,h4b.t2,"They got it all planet","planeticon2.png"]},upgradePlanet3:{id:73,variables:[0],static:["Slave Planet",h4b.B2,h4b.w2,h4b.w2,25,h4b.p3,2,0,h4b.t2,"Get entire races to work for you as slaves","planeticon3.png"]},upgradePlanet4:{id:74,variables:[0],static:["Terraforming",h4b.x2,h4b.w2,h4b.w2,50,h4b.p3,2,0,h4b.t2,"Make it inhabitable for the elfves","planeticon4.png"]},upgradePlanet5:{id:75,variables:[0],static:["Wormhole",2E7,h4b.w2,h4b.w2,h4b.u3,h4b.p3,2,0,h4b.t2,"Faster transportation betweens planets","planeticon5.png"]},upgradePlanet6:{id:77,variables:[0],static:["Quantum Core",h4b.j2,h4b.w2,h4b.w2,h4b.H2,h4b.p3,2,0,h4b.t2,"You can move your planets now","planeticon6.png"]},upgradeContinent1:{id:78,variables:[0],static:["Deliver to Oceania",39E6,h4b.C2,h4b.c2,0,h4b.p3,h4b.F2,0,h4b.K2,"A long way from home","oceania.png"]},upgradeContinent2:{id:79,variables:[0],static:["Deliver to South America",387.5E6,h4b.C2,h4b.c2,0,h4b.p3,h4b.F2,0,h4b.K2,"Here they make snow from plants","southAmerica.png"]},upgradeContinent3:{id:80,variables:[0],static:["Deliver to North America",528.7E6,h4b.C2,h4b.c2,0,h4b.p3,h4b.F2,0,h4b.K2,"I hope my reindeer don't get shot","northAmerica.png"]},upgradeContinent4:{id:81,variables:[0],static:["Deliver to Europe",742.5E6,h4b.C2,h4b.c2,0,h4b.p3,h4b.F2,0,h4b.K2,"My first french kiss","europe.png"]},upgradeContinent5:{id:82,variables:[0],static:["Deliver to Africa",1.111E9,h4b.C2,h4b.c2,0,h4b.p3,h4b.F2,0,h4b.K2,"Sweating my xmas balls off","africa.png"]},upgradeContinent6:{id:83,variables:[0],static:["Deliver to Asia",4.427E9,h4b.C2,h4b.c2,0,h4b.p3,h4b.F2,0,h4b.K2,"So much work","asia.png"]},upgradeGiftpower1:{id:84,variables:[0],static:["Coffee",h4b.u3,h4b.z2,h4b.f3,2,h4b.p3,h4b.F2,0,"Unlock 10% of your Santasperience","Helps the brain to wake up","experience1.png"]},upgradeGiftpower2:{id:85,variables:[0],static:["Deja vu",1E3,h4b.z2,h4b.f3,2,h4b.p3,h4b.F2,0,"Unlock 25% of your Santasperience","Hmmm i've done this before","experience3.png"]},upgradeGiftpower3:{id:86,variables:[0],static:["Memory Pills",1E5,h4b.z2,h4b.f3,2,h4b.p3,h4b.F2,0,"Unlock 50% of your Santasperience","At least one decent spam advertisement","experience2.png"]},upgradeGiftpower4:{id:87,variables:[0],static:["Hypnotherapy",1E7,h4b.z2,h4b.f3,2,h4b.p3,h4b.F2,0,h4b.d3,"Childhood all over again","experience4.png"]},upgradeGoldenGift1:{id:88,variables:[0],static:["Goldwrapper",1E6,h4b.s3,h4b.s3,1,"drop",h4b.F2,0,h4b.t3,"Newest sort of paper, santaception patent pending","goldengifticon1.png"]},upgradeGoldenGift2:{id:89,variables:[0],static:["Hope",1E9,h4b.s3,h4b.s3,7,"time",h4b.F2,0,h4b.V2,"Luck is believing you're lucky","goldengifticon2.png"]},upgradeGoldenGift3:{id:90,variables:[0],static:["Gold mine",1E12,h4b.s3,h4b.s3,77,"drop",h4b.F2,0,h4b.t3,"Dig it","goldengifticon3.png"]},upgradeGoldenGift4:{id:91,variables:[0],static:["777",1E15,h4b.s3,h4b.s3,777,"time",h4b.F2,0,h4b.V2,"Get Lucky","goldengifticon4.png"]},upgradeAlien1:{id:92,variables:[0],static:["Deliver to Su&acute;Gagnar",5E11,h4b.C2,h4b.L2,0,h4b.p3,h4b.F2,0,h4b.K2,"","alien1.png"]},upgradeAlien2:{id:93,variables:[0],static:["Deliver to Drozol",123456E12,h4b.s3,h4b.L2,0,"time",h4b.F2,0,h4b.V2,"","alien2.png"]},upgradeAlien3:{id:94,variables:[0],static:["Deliver to Blop",777E18,h4b.c2,h4b.L2,0,h4b.p3,1.50,0,h4b.v2,"","alien3.png"]},upgradeAlien4:{id:95,variables:[0],static:["Deliver to Fixief",555555E9,"kostPrijs",h4b.L2,0,h4b.p3,h4b.F2,0,"+10% item price reduction","","alien4.png"]},upgradeAlien5:{id:96,variables:[0],static:["Deliver to Zure",1E18,h4b.C2,h4b.L2,0,h4b.p3,h4b.F2,0,h4b.K2,"","alien5.png"]},},achievements={achievGift1:{id:0,variables:[0],requires:[h4b.P2,1],static:["1 Gift","gift1","Make 1 gift","This one is mine"]},achievGift2:{id:1,variables:[0],requires:[h4b.P2,1E2],static:["100 Gifts","gift2","Make 100 gifts",""]},achievGift3:{id:2,variables:[0],requires:[h4b.P2,1E3],static:["1 000 Gifts","gift3","Make 1 000 gifts",""]},achievGift4:{id:3,variables:[0],requires:[h4b.P2,1E4],static:["10 000 Gifts","gift4","Make 10 000 gifts",""]},achievGift5:{id:4,variables:[0],requires:[h4b.P2,1E5],static:["100 000 Gifts","gift5","Make 100 000 gifts",""]},achievGift6:{id:5,variables:[0],requires:[h4b.P2,1E6],static:["Gifted","gift6","Make 1 000 000 gifts",""]},achievGift7:{id:6,variables:[0],requires:[h4b.P2,1E7],static:["10 000 000 Gifts","gift7","Make 10 000 000 gifts",""]},achievGift8:{id:7,variables:[0],requires:[h4b.P2,1E8],static:["100 000 000 Gifts","gift8","Make 100 000 000 gifts",""]},achievGift9:{id:8,variables:[0],requires:[h4b.P2,1E9],static:["Gift Billionaire","gift9","Make 1 000 000 000 gifts",""]},achievGift10:{id:9,variables:[0],requires:[h4b.P2,1E10],static:["10 000 000 000 Gifts","gift10","Make 10 000 000 000 gifts",""]},achievGift11:{id:10,variables:[0],requires:[h4b.P2,1E11],static:["100 000 000 000 Gifts","gift11","Make 100 000 000 000 gifts",""]},achievGift12:{id:11,variables:[0],requires:[h4b.P2,1E12],static:["1 000 000 000 000 Gifts","gift12","Make 1 000 000 000 000 gifts",""]},achievGift13:{id:12,variables:[0],requires:[h4b.P2,1E15],static:["1 000 000 000 000 000 Gifts","gift13","Make 1 000 000 000 000 000 gifts",""]},achievGift14:{id:13,variables:[0],requires:[h4b.P2,1E18],static:["Bringer of Gifts","gift14","Make 1 000 000 000 000 000 000 gifts",""]},achievGift15:{id:14,variables:[0],requires:[h4b.P2,1E21],static:["God of Gifts","gift15","Make 1 000 000 000 000 000 000 000 gifts",""]},achievKlik1:{id:15,variables:[0],requires:[h4b.c2,10],static:["My first gifts","limbo1","Make 10 gifts from clicking",""]},achievKlik2:{id:81,variables:[0],requires:[h4b.c2,1E3],static:["Work Work","limbo2","Make 1000 gifts from clicking",""]},achievKlik3:{id:16,variables:[0],requires:[h4b.c2,1E6],static:["Click 1 million gifts","limbo3","Make 1 million gifts from clicking",""]},achievKlik4:{id:17,variables:[0],requires:[h4b.c2,1E9],static:["Click 1 billion gifts","limbo4","Make 1 billion gifts from clicking",""]},achievKlik5:{id:18,variables:[0],requires:[h4b.c2,1E12],static:["24/7","limbo5","Make 1 trillion gifts from clicking",""]},achievKlik6:{id:19,variables:[0],requires:[h4b.c2,1E15],static:["Toy Machine God","limbo6","Make 1 quadrillion gifts from clicking",""]},achievElf1:{id:20,variables:[0],requires:[h4b.w3,1],static:["1 Elf","elf1","Have 1 Elf",""]},achievElf2:{id:21,variables:[0],requires:[h4b.w3,50],static:["50 Elves","elf2","Have 50 Elves",""]},achievElf3:{id:22,variables:[0],requires:[h4b.w3,h4b.u3],static:["100 Elves","elf3","Have 100 Elves",""]},achievElf4:{id:23,variables:[0],requires:[h4b.w3,h4b.G2],static:["150 Elves","elf4","Have 150 Elves",""]},achievElf5:{id:24,variables:[0],requires:[h4b.w3,h4b.H2],static:["200 Elves","elf5","Have 200 Elves",""]},achievConveyor1:{id:25,variables:[0],requires:[h4b.R2,1],static:["1 Conveyor","conveyor1","Have 1 Conveyor",""]},achievConveyor2:{id:26,variables:[0],requires:[h4b.R2,50],static:["50 Conveyors","conveyor2","Have 50 Conveyors",""]},achievConveyor3:{id:27,variables:[0],requires:[h4b.R2,h4b.u3],static:["100 Conveyors","conveyor3","Have 100 Conveyors",""]},achievConveyor4:{id:28,variables:[0],requires:[h4b.R2,h4b.G2],static:["150 Conveyors","conveyor4","Have 150 Conveyors",""]},achievConveyor5:{id:29,variables:[0],requires:[h4b.R2,h4b.H2],static:["200 Conveyors","conveyor5","Have 200 Conveyors",""]},achievToyMachine1:{id:30,variables:[0],requires:[h4b.q3,1],static:["1 Toy Machine","toymachine1","Have 1 Toy Machine",""]},achievToyMachine2:{id:31,variables:[0],requires:[h4b.q3,50],static:["50 Toy Machines","toymachine2","Have 50 Toy Machines",""]},achievToyMachine3:{id:32,variables:[0],requires:[h4b.q3,h4b.u3],static:["100 Toy Machines","toymachine3","Have 100 Toy Machines",""]},achievToyMachine4:{id:33,variables:[0],requires:[h4b.q3,h4b.G2],static:["150 Toy Machines","toymachine4","Have 150 Toy Machines",""]},achievToyMachine5:{id:34,variables:[0],requires:[h4b.q3,h4b.H2],static:["200 Toy Machines","toymachine5","Have 200 Toy Machines",""]},achievRobot1:{id:35,variables:[0],requires:[h4b.O2,1],static:["1 Robot","robot1","Have 1 Robot",""]},achievRobot2:{id:36,variables:[0],requires:[h4b.O2,50],static:["50 Robots","robot2","Have 50 Robots",""]},achievRobot3:{id:37,variables:[0],requires:[h4b.O2,h4b.u3],static:["100 Robots","robot3","Have 100 Robots",""]},achievRobot4:{id:38,variables:[0],requires:[h4b.O2,h4b.G2],static:["150 Robots","robot4","Have 150 Robots",""]},achievRobot5:{id:39,variables:[0],requires:[h4b.O2,h4b.H2],static:["200 Robots","robot5","Have 200 Robots",""]},achievGiftWrapper1:{id:40,variables:[0],requires:[h4b.b2,1],static:["1 Giftwrapper","giftwrapper1","Have 1 Giftwrapper",""]},achievGiftWrapper2:{id:41,variables:[0],requires:[h4b.b2,50],static:["50 Giftwrappers","giftwrapper2","Have 50 Giftwrappers",""]},achievGiftWrapper3:{id:42,variables:[0],requires:[h4b.b2,h4b.u3],static:["100 Giftwrappers","giftwrapper3","Have 100 Giftwrappers",""]},achievGiftWrapper4:{id:43,variables:[0],requires:[h4b.b2,h4b.G2],static:["150 Giftwrappers","giftwrapper4","Have 150 Giftwrappers",""]},achievGiftWrapper5:{id:44,variables:[0],requires:[h4b.b2,h4b.H2],static:["200 Giftwrappers","giftwrapper5","Have 200 Giftwrappers",""]},achievForklift1:{id:45,variables:[0],requires:[h4b.U2,1],static:["1 Forklift","forklift1","Have 1 Forklift",""]},achievForklift2:{id:46,variables:[0],requires:[h4b.U2,50],static:["50 Forklifts","forklift2","Have 50 Forklifts",""]},achievForklift3:{id:47,variables:[0],requires:[h4b.U2,h4b.u3],static:["100 Forklifts","forklift3","Have 100 Forklifts",""]},achievForklift4:{id:48,variables:[0],requires:[h4b.U2,h4b.G2],static:["150 Forklifts","forklift4","Have 150 Forklifts",""]},achievForklift5:{id:49,variables:[0],requires:[h4b.U2,h4b.H2],static:["200 Forklifts","forklift5","Have 200 Forklifts",""]},achievToyThief1:{id:50,variables:[0],requires:[h4b.J2,1],static:["1 Toy Thief","toythief1","Have 1 Toy Thief",""]},achievToyThief2:{id:51,variables:[0],requires:[h4b.J2,50],static:["50 Toy Thieves","toythief2","Have 50 Toy Thieves",""]},achievToyThief3:{id:52,variables:[0],requires:[h4b.J2,h4b.u3],static:["100 Toy Thieves","toythief3","Have 100 Toy Thieves",""]},achievToyThief4:{id:53,variables:[0],requires:[h4b.J2,h4b.G2],static:["150 Toy Thieves","toythief4","Have 150 Toy Thieves",""]},achievToyThief5:{id:54,variables:[0],requires:[h4b.J2,h4b.H2],static:["200 Toy Thieves","toythief5","Have 200 Toy Thieves",""]},achievDuplicator1:{id:55,variables:[0],requires:[h4b.T2,1],static:["1 Duplicator","duplicator1","Have 1 Duplicator",""]},achievDuplicator2:{id:56,variables:[0],requires:[h4b.T2,50],static:["50 Duplicators","duplicator2","Have 50 Duplicators",""]},achievDuplicator3:{id:57,variables:[0],requires:[h4b.T2,h4b.u3],static:["100 Duplicators","duplicator3","Have 100 Duplicators",""]},achievDuplicator4:{id:58,variables:[0],requires:[h4b.T2,h4b.G2],static:["150 Duplicators","duplicator4","Have 150 Duplicators",""]},achievDuplicator5:{id:59,variables:[0],requires:[h4b.T2,h4b.H2],static:["200 Duplicators","duplicator5","Have 200 Duplicators",""]},achievVortexMachine1:{id:60,variables:[0],requires:[h4b.S2,1],static:["1 Vortex Machine","vortex1","Have 1 Vortex Machine",""]},achievVortexMachine2:{id:61,variables:[0],requires:[h4b.S2,50],static:["50 Vortex Machines","vortex2","Have 50 Vortex Machines",""]},achievVortexMachine3:{id:62,variables:[0],requires:[h4b.S2,h4b.u3],static:["100 Vortex Machines","vortex3","Have 100 Vortex Machines",""]},achievVortexMachine4:{id:63,variables:[0],requires:[h4b.S2,h4b.G2],static:["150 Vortex Machines","vortex4","Have 150 Vortex Machines",""]},achievVortexMachine5:{id:64,variables:[0],requires:[h4b.S2,h4b.H2],static:["200 Vortex Machines","vortex5","Have 200 Vortex Machines",""]},achievFactory1:{id:65,variables:[0],requires:[h4b.I2,1],static:["1 Factory","factory1","Have 1 Factory",""]},achievFactory2:{id:66,variables:[0],requires:[h4b.I2,50],static:["50 Factories","factory2","Have 50 Factories",""]},achievFactory3:{id:67,variables:[0],requires:[h4b.I2,h4b.u3],static:["100 Factories","factory3","Have 100 Factories",""]},achievFactory4:{id:68,variables:[0],requires:[h4b.I2,h4b.G2],static:["150 Factories","factory4","Have 150 Factories",""]},achievFactory5:{id:69,variables:[0],requires:[h4b.I2,h4b.H2],static:["200 Factories","factory5","Have 200 Factories",""]},achievPlanet1:{id:70,variables:[0],requires:[h4b.c3,1],static:["1 Planet","planet1","Have 1 Planet",""]},achievPlanet2:{id:71,variables:[0],requires:[h4b.c3,50],static:["50 Planets","planet2","Have 50 Planets",""]},achievPlanet3:{id:72,variables:[0],requires:[h4b.c3,h4b.u3],static:["100 Planets","planet3","Have 100 Planets",""]},achievPlanet4:{id:73,variables:[0],requires:[h4b.c3,h4b.G2],static:["150 Planets","planet4","Have 150 Planets",""]},achievPlanet5:{id:74,variables:[0],requires:[h4b.c3,h4b.H2],static:["200 Planets","planet5","Have 200 Planets",""]},achievContinent1:{id:75,variables:[0],requires:[h4b.k2,'upgradeContinent1'],static:["Oceania","continent1","Deliver gifts to Oceania",""]},achievContinent2:{id:76,variables:[0],requires:[h4b.k2,'upgradeContinent2'],static:["South America","continent2","Deliver gifts to South Amerika",""]},achievContinent3:{id:77,variables:[0],requires:[h4b.k2,'upgradeContinent3'],static:["North America","continent3","Deliver gifts to North America",""]},achievContinent4:{id:78,variables:[0],requires:[h4b.k2,'upgradeContinent4'],static:["Europe","continent4","Deliver gifts to Europe",""]},achievContinent5:{id:79,variables:[0],requires:[h4b.k2,'upgradeContinent5'],static:["Africa","continent5","Deliver gifts to Africa",""]},achievContinent6:{id:80,variables:[0],requires:[h4b.k2,'upgradeContinent6'],static:["Asia","continent6","Deliver gifts to Asia",""]},achievContinent7:{id:82,variables:[0],requires:["bla",'bla'],static:["Winner","continent7","Deliver gifts to the world",""]},achievGoldenGift1:{id:83,variables:[0],requires:[h4b.s3,'13'],static:["Lucky or Unlucky?","goldgift1","Catch 13 golden gifts",""]},achievGoldenGift2:{id:84,variables:[0],requires:[h4b.s3,'91'],static:["Lucky times Unlucky","goldgift2","Catch 91 golden gifts",""]},achievGoldenGift3:{id:85,variables:[0],requires:[h4b.s3,'777'],static:["Lucky Spinner","goldgift3","Catch 777 golden gifts","Jackpot"]},achievGoldenGift4:{id:86,variables:[0],requires:[h4b.s3,'1313'],static:["Winner Winner, Chicken Dinner","goldgift4","Catch 1313 golden gifts",""]},achievBuildingExact1:{id:87,variables:[0],requires:[h4b.Y2,'1'],static:["Lonely","zoveelbuildings1","Have exactly 1 item of each",""]},achievBuildingExact2:{id:88,variables:[0],requires:[h4b.Y2,'69'],static:["Dirty Mind","zoveelbuildings2","Have exactly 69 items of each",""]},achievBuildingAll1:{id:89,variables:[0],requires:[h4b.k3,'10'],static:["DecaBuilding","minbuildings1","Have at least 10 items of each",""]},achievBuildingAll2:{id:90,variables:[0],requires:[h4b.k3,'100'],static:["HectoBuilding","minbuildings2","Have at least 100 items of each",""]},achievBuildingAll3:{id:91,variables:[0],requires:[h4b.k3,'200'],static:["Double HectoBuilding","minbuildings3","Have at least 200 items of each",""]},achievBuildingTotal1:{id:92,variables:[0],requires:[h4b.i3,'100'],static:["My House is Getting too Small","allbuildings1","Have 100 items",""]},achievBuildingTotal2:{id:93,variables:[0],requires:[h4b.i3,'500'],static:["North Pole Overcrowded","allbuildings2","Have 500 items",""]},achievBuildingTotal3:{id:94,variables:[0],requires:[h4b.i3,'1000'],static:["Moving on to the Next World","allbuildings3","Have 1000 items",""]},achievBuildingTotal4:{id:95,variables:[0],requires:[h4b.i3,'2000'],static:["The Galaxy is Mine","allbuildings4","Have 2000 items",""]},achievUpgrade1:{id:96,variables:[0],requires:[h4b.l3,'25'],static:["Scientist","upgrades1","Develop 25 upgrades",""]},achievUpgrade2:{id:97,variables:[0],requires:[h4b.l3,'50'],static:["Laboratoy","upgrades2","Buy 50 upgrades",""]},achievUpgrade3:{id:98,variables:[0],requires:[h4b.l3,'75'],static:["Spacelab","upgrades3","Buy 75 upgrades",""]},achievLessClicks1:{id:99,variables:[0],requires:["lessClicks",'9'],static:["Lazy","minclicks1","Deliver all gifts to earth by using your toy machine less than 9 times",""]},achievLessClicks2:{id:h4b.u3,variables:[0],requires:["lessClicks",'6'],static:["Mouse Phobia","minclicks2","Deliver all gifts to earth by using your toy machine less than 6 times",""]},achievAchiev1:{id:101,variables:[0],requires:[h4b.s2,'5'],static:["Beginner's Luck","achievement1","Achieve 5 Achievements",""]},achievAchiev2:{id:102,variables:[0],requires:[h4b.s2,'10'],static:["Progress","achievement2","Achieve 10 Achievements",""]},achievAchiev3:{id:103,variables:[0],requires:[h4b.s2,'25'],static:["Apprentice Achiever","achievement3","Achieve 25 Achievements",""]},achievAchiev4:{id:104,variables:[0],requires:[h4b.s2,'50'],static:["Perfectionist","achievement4","Achieve 50 Achievements",""]},achievAchiev5:{id:105,variables:[0],requires:[h4b.s2,'100'],static:["Overachiever","achievement5","Achieve 100 Achievements",""]},achievAchievAchiev:{id:106,variables:[0],requires:[h4b.s2,'100'],static:["AchieveCeption","achievement6","Achieve 5 Achievement Achievements",""]},achievRemember:{id:107,variables:[0],requires:[h4b.k2,'upgradeGiftpower4'],static:["A Clear Mind","santasperience1",h4b.d3,""]},achievLessTime1:{id:108,variables:[0],requires:["lessTime",'1'],static:["Minute Man","minute","Deliver all gifts to earth in less than a minute","You always deliver this fast?"]},achievLike:{id:109,variables:[0],requires:["bla",'bla'],static:["Santa likes you too!","like","Like SantaCeption","Your loves makes everything 10% more powerful"]},achievAlien1:{id:901,variables:[0],requires:[h4b.k2,'upgradeAlien1'],static:["Su&acute;Gagnar","alienachievement1","Deliver gifts to Su&acute;Gagnar",""]},achievAlien2:{id:902,variables:[0],requires:[h4b.k2,'upgradeAlien2'],static:["Drozol","alienachievement2","Deliver gifts to Drozol",""]},achievAlien3:{id:903,variables:[0],requires:[h4b.k2,'upgradeAlien3'],static:["Blop","alienachievement3","Deliver gifts to Blop",""]},achievAlien4:{id:904,variables:[0],requires:[h4b.k2,'upgradeAlien4'],static:["Fixief","alienachievement4","Deliver gifts to Fixief",""]},achievAlien5:{id:905,variables:[0],requires:[h4b.k2,'upgradeAlien5'],static:["Zure","alienachievement5","Deliver gifts to Zure",""]},achievAlien7:{id:906,variables:[0],requires:["bla",'bla'],static:["Intergalactic Claus","universe1","Deliver gifts to all alien races",""]},},santaSlaps=0,santaFace=h4b.X2,actief=h4b.X2,gameWon=h4b.r3,maal10=h4b.r3,robotArray=[],achievPwr=0,aantalUpgrades=0,fap=0,totalBuildings=0,userid,lastMini,lastMini2,snel,traag;