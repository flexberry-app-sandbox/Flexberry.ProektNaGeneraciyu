docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proekt_na_generaciyu/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t proekt_na_generaciyu/app ../..
