# Frostwindについて

Frostwindとは、Twitterでツイート検索を行う際に特定のユーザからのツイートを除外するためのChromium系ブラウザ用の拡張機能です。

# 使い方

  1. Twitterでツイート検索を行う(`https://twitter.com/search?f=tweets&vertical=default&q=[クエリ]` または `https://twitter.com/search?q=[クエリ]&src=typd&f=live`)
  2. ユーザ部分またはツイートの個別URLへのリンク部分を右クリックしてコンテクストメニューを表示させる
  3. 「このユーザからのツイートを除外」を選択する
  4. 元のクエリに `%20-from:[screen_name]` を加えて検索した結果が新規タブで開かれる
