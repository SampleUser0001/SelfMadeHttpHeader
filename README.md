# SelfMadeHttpHeader

HTTPヘッダを手入力する。  
HTTPヘッダインジェクションの調査

## 起動

``` sh
cd app
npm install
npm start
```

## curl

### location=hogehoge

``` sh
curl localhost:3000?location=%0d%0dhogehoge --head
```

``` sh
HTTP/1.1 200 OK
X-Powered-By: Express
Location: hogehoge
Content-Type: text/html; charset=utf-8
Content-Length: 11
ETag: W/"b-Ck1VqNd45QIvq3AZd8XYQLvEhtA"
Date: Thu, 08 Apr 2021 08:04:07 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### HTTPヘッダインジェクション

``` sh
curl http://localhost:3000?location=%0d%0d<script type=”text/javascript”>alert(“HTTPヘッダにインジェクション”);</script> --head
```

ヘッダの出力順によってはJavaScriptが実行される。

HTTPリクエストヘッダとHTTPリクエストボディを分ける要素は改行なので、GETパラメータ等で取得した値をリクエストヘッダに設定するような実装をしていると、余計な改行＋JavaScriptを仕込まれる可能性があり、脆弱性につながる。

## 参考

- [安全なウェブサイトの作り方 - 1.7 HTTPヘッダ・インジェクション：IPA 独立行政法人 情報処理推進機構](https://www.ipa.go.jp/security/vuln/websecurity-HTML-1_7.html)