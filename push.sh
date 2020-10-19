
read -p "输入提交备注:" remark

time=$(date "+%Y-%m-%d %H:%M:%S")
echo "$time"
yarn format
git pull
git add .
git commit -m "$time   $remark"
git push -u origin master
