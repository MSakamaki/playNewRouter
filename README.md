new router
----


### start


```sh
# jspmをグローバルインストール
npm install -g jspm

# repository clone
git clone https://github.com/MSakamaki/playNewRouter.git
cd playNewRouter

# node package install
npm install

# javascript module install
jspm install npm:angular@1.4.0-rc.0
jspm install npm:angular-new-router -o "{ main : 'dist/router.es5'}"
jspm install npm:esprima
jspm install

# start develop server
gulp
```

