![react-tool-box-logo](https://github.com/minori-sys/react-form-tool-box/assets/31578760/327650b5-b932-4b80-a7ea-eba40d9032d7)

# React お ど う ぐ ば こ〜Form編〜

# Overview

みんな大好き`React`でフォームを使う場合、個人的に最強と思われる、以下の組み合わせで作成したサンプルになります。

**あくまで個人的なので、「最強」というのは、ネタでお願いします。。**

### zenn記事
https://zenn.dev/minori_sys/articles/686fa08e702510

---

### `React` × `Typescript` × `React Hook Form` × `Zod`

#### フォーム全体像

![screencapture-localhost-5173-2023-08-28-00_30_02](https://github.com/minori-sys/react-form-tool-box/assets/31578760/406da64d-599b-424d-a423-404e915b01b9)


#### Validation時

![screencapture-localhost-5173-2023-08-28-00_30_16](https://github.com/minori-sys/react-form-tool-box/assets/31578760/12cea235-4c9b-4ab5-9da8-c3741b84a94f)

#### 搭載Form部品

- てきすとぼっくす
- せれくとぼっくす
- らじおぼたん
- ちぇっくぼっくす
- てきすとえりあ
- ぼたん

#### 搭載Validation

- てきすとぼっくすになんか書いてないと怒られるやつ
- めーるあどれすの形式じゃないと怒られるやつ
- めーるあどれすをもう一回入力して、違っていたら怒られるやつ
- せれくとぼっくす選んでないと怒られるやつ
- らじおぼたん選んでないと怒られるやつ
- ちぇっくぼっくす選んでないと怒られるやつ
- てきすとえりあになんか書いてないと怒られるやつ

### なぜ`React Hook Form`なのか

業務では、`Redux Form`、`Formik`、`React Hook Form`の全てを使ったことがあります。
現在、`React Hook Form`を愛用しているのは、以下の点からです。

- 処理速度の速さ
- 豊富なValidationライブラリ（`Yup`、`Zod`等）と組み合わせ可
- 軽量なライブラリ

で、特に処理速度で感じたエピソードをひとつ。

業務で、`Formik`を利用した際、フォーム選択された値を表示する処理がありまして。

フォームの項目が膨大で、割と処理も遅い印象だったのですが、 `React Hook Form`へ切り替えた際、速いなと。しかも、最近、v6からv7にアップデートした際、更に処理速度が上がっているなあと体感できるほどで。

いやあ、すごいや。**ブルースリーのアイコンの人**。（コラ）

### なぜ`Zod`なのか

実は、元々業務では長年、`React Hook Form` × `Yup`の組み合わせで対応していました。
ですが、今回、せっかく個人でサンプルを作成するので、使ったことのないライブラリを試してみたいなあという願望というか<s>欲望</s>と以下の理由から`Zod`を採用してみました。

- `Typescript`との相性が良い（スキーマから`TypeScript`の型を自動的に作成できる）
- 2020年登場と、比較的新参者（失礼）のくせに（失礼の上塗り）、Yupと互角の戦いを繰り広げている、てか、抜いた！？（下記資料参照）

**2023年8月時点での比較**
<img width="1392" alt="スクリーンショット 2023-08-05 19 00 37" src="https://github.com/minori-sys/react-form-tool-box/assets/31578760/2822d269-9562-4d6e-af8e-b35578fbb889">

どうでもいいことですが、`Zod`のimportが`z`って、シンプルでいいですよね。

てか、**ド○ゴンボ○ルを思い出してしまうのは、私だけでしょうか。**（ほんとにどうでもいい）

という訳で、アレだ。

**煮るなり焼くなり、もう好きにして。＞マテ**

# Installation

まずはソースコードをDLして適当な場所に置いて下さい。  
Gitが入っていれば下記のコマンドでDLできるはずです。

```bash
$ git clone https://github.com/minori-sys/react-form-tool-box.git
```

# Usage

## 何はともあれ、動かしてみたい

とりあえず、以下をコマンドライン上で実行して頂ければ、**すてきな☆すてきな☆**（あくまで自称）フォームが表示されるはずです。

```bash
$ yarn install
$ yarn dev
```

あとは、ご自由にいじいじしてお使いください。

~~あなた色に染めてん。~~

## で？仕様は？

- react@18.2.0
- react-hook-form@7.45.3
- zod@3.21.4

**環境構築は、`Vite`で行っています。**

`.nvmrc`ファイルを追加しています。

`nvm`をご利用の場合、以下のコマンドで、本システム上で`Node18.17.0`が適用されます。

**Node.jsのverですが、16以上でないと動かないかもですので、適宜、ご対応願います。**

```bash
$ nvm use
```

あー。`volta`とか`n`とかの方は、まあ、適宜よしなにがんばって☆ ＞マテ

尚、`prettier`と`stylelint`も追加していますので、以下のコマンドでコード整形もできます。あら、べんり♪

```bash
$  yarn format
```

あとはコードとか見て頑張って☆

おしまい☆彡

## いい歳なのだから、少しは説明責任を果たすように

すみません。。

だいたいの野望（ヤメれ）は意識しなくても実現できるようになっているかと思われますが、
1点だけ。

### Form部品の`React Hook Form`における`useController`の扱い

はい。今回使っていません。（ドきっぱり）

といいますのも、`useController`が必要なのは、`MUI`などと組み合わせた場合のみで、それらを利用しない場合、今回の作成例のように`register`使えば無問題ですので。

1点だけと言いながら、もうひとつだけ。

### アイコンの扱い

今回、アイコンは`RemixIcon`を利用しています（多謝）。

cdnで読み込んでいますが、それは、**あくまで1箇所しか使っていなかったからです。（爆）**

ですので、あちらこちらでご利用される場合は、`React Icons`を使われた方が吉かと（RemixIconも入っとるでよ（誰）。

1点だけだったはずだぁ？忘れたなあ（おい）

### なぜ`Pure CSS`なのか

`React`でのcssの選択肢は、今回採用した`Pure CSS`の他に`Styled Components`や`Emotion`など多種多様です。

今回はあくまでおどうぐばこということで、どんなシステムにでも、サクッと組み込みやすいものを目指しました。

ですので、あえて、一番シンプルな`Pure CSS`を選択しました。

てか、Vueでサンプルを作る際でも、そのまま使い回せるなあと。（待て）

という訳で、あなたのシステムに合わせて、あなた色に（以下略）

## 最後にアレだ

ついカッとなって作ったシロモノ、かつ、ゆる～く動かしただけですので、いろいろとアレなところがあるかと思われます。

バグ等ございましたら、ご一報頂けますとひれ伏して喜びます。

### 免責事項
本コードのご利用により、いかなる損失や損害などの被害が発生しても責任を追いかねますのでご了承ください。m(__)m

