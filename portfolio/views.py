from django.shortcuts import render

def home(request):
    return render(request, 'portfolio/home.html', {'active_tab': 'home'})

def projects(request):
    return render(request, 'portfolio/projects.html', {'active_tab': 'projects'})
