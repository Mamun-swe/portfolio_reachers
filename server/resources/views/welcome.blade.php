<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API</title>
</head>
<style>
.flex-center {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
}

.flex-column {
    -ms-flex-direction: column !important;
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
    flex-direction: column !important;
}

.image{
    width: 250px;
}

@media(min-width: 576px){
    .image{
        width: 450px;
    }
}
</style>
<body style="overflow: hidden;">
    <div style="width: 100%; height: 100vh;">
        <div class="flex-center flex-column">
            <img src="{{url('/static/404.jpg')}}" class="image" alt="Image"/>
        </div>
    </div>
</body>
</html>