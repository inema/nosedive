from ..models import Person
from rest_framework.decorators import api_view
from ..serializers import PersonSerializer
from rest_framework.response import Response

# Create your views here.
@api_view(['get'])
def get_person(request, id):
    person = Person.objects.filter(id=id)
    #person = Person.objects.all()
    serialized = PersonSerializer(person, many=True)

    return Response(serialized.data)
