import { NFTStorage, File } from "nft.storage";
import fs from "fs";

const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE5OTBiNzIyQzBjNDUwMWU2ODkzRDNiZWFkNUU5RDU4MzQzNWQxOEUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3MzQyNTQ0NzUyNiwibmFtZSI6InRlc3QifQ.ix1siwq6omSU9gqLePV1AYq5HOWXEXzZ95EBP8_lWSM";
const client = new NFTStorage({ token: apiKey });

const a = "3/22 출석";
const b = "2";
const c = "1";
const d = "지각";

const metadata = await client.store({
    name: "3/22",
    description: "컴퓨터 네트워크 03분반 3/22 출석",
    image: new File([fs.readFileSync("./Eat.png")], "Eat.png", { type: "image/png" }),
    attributes: [

        {
            trait_type: "type",
            value: a,
        },

        {
            trait_type: "Total Score",
            value: b,
        },

        {
            trait_type: "Attendance State",
            value: c,
        },

        {
            trait_type: "Comment",
            value: d,
        },
    ]
});
console.log(metadata.url);