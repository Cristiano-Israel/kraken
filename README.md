<img width="200" src="https://github.com/arcaneiceman/kraken/blob/master/kraken-client/src/assets/kraken-logo.png"/>

## Kraken: A multi-platform distributed brute-force password cracking system

<div id="{'introduction'}">

### What is Kraken

</div>

Kraken is an online distributed brute force password cracking tool. It allows you to parallelize dictionaries and crunch word generator based cracking across multiple machines both as a web app in a web browser and as a standalone electron based client. Kraken aims to be easy to use, fault tolerant and scalable.

I wrote Kraken because I wanted to learn more about offensive security and to write an easy solution to overcome the limitation of using a single device when attempting distribute brute force workloads.

<div id="{'installation'}">

### Installation

</div>

##### Server and Browser Client
Kraken is a dockerized application using <strong>docker-compose</strong> which will launch the <strong>db</strong> (Postgres), <strong>s3 compliant file storage</strong> (Minio),
the <strong>server</strong> and the <strong>browser client</strong>. You can find the docker-compose file at the root directory of the repository. You can deploy it using the following command:

```
docker-compose up
```

##### Portable Desktop Client

The desktop client is an electron based portable application and can be run on Mac, Windows and Linux. Due to sensitive permissions required to function, it is highly recommended that you compile and it yourself using: <syntaxhighlighter language="bash" style="{github}">npm run electron-start</syntaxhighlighter>

###### Windows

Releases include a zip file with the portable executable and required hashcat files. Hashcat files can be dowloaded from their home page or [here](https://hashcat.net/files/hashcat-5.1.0.7z).

###### Linux

Releases include a Linux **AppImage** which only requires hashcat to be installed through : <syntaxhighlighter language="bash" style="{github}">sudo apt-get install hashcat</syntaxhighlighter>

### Note

This guide is on-going but please feel free to raise an issue or contact me for any help required.
