describe("sss", ()=>{
    it('测试 reaction with simple mst',function(done){

        const tModel = types.model({
            ttt: types.maybe(types.string)
        }).actions(self=>({
            setT(val){
                self.ttt = val;
            }
        }));

        const tinstance = tModel.create({
            ttt: "tttt"
        });


        reaction(()=>{
            return tinstance.ttt;
        },
        data=>{
            console.log("data is ", data);
            done()
        }
        );

        tinstance.setT("aaaa");

    })

    it('测试 reaction with simple mst 2',function(done){

        function c(initValue) {
            const tModel = types.model({
                ttt: types.maybe(types.string)
            }).actions(self=>({
                setT(val){
                    self.ttt = val;
                }
            }));

            const tinstance = tModel.create(initValue);
            return tinstance;
        }

        const tinstance = c({
            ttt: "tttt"
        })



        reaction(()=>{
            return tinstance.ttt;
        },
        data=>{
            console.log("data is ", data);
            done()
        }
        );

        tinstance.setT("aaaa");

    })
    it('测试 reaction with simple mst 3',function(done){

        //default 5000
        // jest.setTimeout(6000);

        function c(initValue) {
            const tModel = types.model({
                ttt: types.maybe(types.model({
                    id: types.string
                }))
            }).actions(self=>({
                setT(val){
                    self.ttt = val;
                }
            }));

            const tinstance = tModel.create(initValue);
            return tinstance;
        }

        const tinstance = c({
            ttt: {id: "111"}
        })



        reaction(()=>{
            return tinstance.ttt;
        },
        data=>{
            console.log("tinstance.ttt ", data);
            done()
        }
        );

        reaction(()=>{
            return tinstance.ttt.id;
        },
        data=>{
            console.log("tinstance.ttt.id ", data);
            done()
        }
        );

        tinstance.setT({id: "222"});


    })
    it('测试 reaction with simple mst 4',function(done){


        const tttModel = types.model({
            id: types.string
        });

        function c(initValue) {
            const tModel = types.model({
                // ttt: types.maybe(types.model({
                //     id: types.string
                // }))
                title: types.string,
                ttt: types.maybe(tttModel)
            }).actions(self=>({
                set(key, val){
                    self[key] = val;
                }
            }));

            const tinstance = tModel.create(initValue);
            return tinstance;
        }

        const tinstance = c({
            ttt: {id: "111"},
            title: "demo",
        })


        reaction(()=>{
            return tinstance.ttt;
        },
        data=>{
            console.log("tinstance.ttt ", data);
            done()
        }
        );
        reaction(()=>{
            return tinstance.title;
        },
        data=>{
            console.log("tinstance.title ", data);
            done()
        }
        );

        const tttInstance = tttModel.create({id: "222"});

        tinstance.set("ttt", tttInstance);
        // tinstance.set("title", "demo2");


    })
})