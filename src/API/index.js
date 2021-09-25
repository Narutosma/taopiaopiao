export default async function request(path, opt){
    const url = "https://mock.mengxuegu.com/mock/614dc871bad10744bb0487f6/movie" + path;
    const option = Object.assign({
        methods: "GET"
    }, opt);
    try{
        const res = await fetch(url, option);
        return res.json();
    }catch (e){
        // 错误信息
    }
}