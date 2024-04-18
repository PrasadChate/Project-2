class ApiFeatures{
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    //to search a product
    search(){
        const keyword = this.queryStr.keyword ? {
            refNumber:{
                $regex:this.queryStr.keyword,
                $options:"i",
            }
        }:{};

        // console.log(keyword);

        this.query = this.query.find({ ...keyword });
        return this;

    }

    filter(){
        const querycopy = {...this.queryStr};

        //Removing some fields for category
        const removeFields = ["keyword", "page", "limit"];

        removeFields.forEach((key)=>delete querycopy[key]);

        this.query = this.query.find(querycopy);
        return this;
    }
}

module.exports = ApiFeatures;