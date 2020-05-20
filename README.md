# system-info
Tiny package to fetch system  info


# Available Options

1.tiny(default)
Fecth basic details 
```sh

const sInfo=require("@manujayaraj/system-info");

console.log(sInfo.systemInfo("tiny"));

/*{
  type: 'Linux',
  platform: 'linux',
  architecture: 'x64',
  release: '5.4.0-31-generic'
}*/
```
2.medium

Fetch details in the moderate level

3.complete

Fetch all the details

