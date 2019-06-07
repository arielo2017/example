
const data: {[key: string]: any} = require('../utils/JsonUtil');

export class JsonUtil
{

    static ReadJson(): any
    {
        var fs = require('fs');
        // Read the file, and pass it to your callback
        fs.readFile("../Test/datapost.json", handleJSONFile);
        var handleJSONFile = function (err, data) {
            if (err) {
                throw err;
            }
           
        }
        return data;
    }
    
}

