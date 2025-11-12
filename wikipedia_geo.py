import wikipedia 
import re
from geojson import Feature, Point

wikipedia.set_lang("et")

# read these from file derived from the portal site,
# after manual testing:
#https://www.mois.ee/harju/alu.shtml	Alu	 (Allo) — rüütlimõis 	 Rapla kihelkonnas Harjumaal

portal_link= "https://www.mois.ee/harju/alu.shtml"
manor = "Alu mõis"
longName = "rüütlimõis 	 Rapla kihelkonnas Harjumaal"

# wikipedia page object is created
page_object = wikipedia.page(manor)

placeName = page_object.original_title + ", " +longName
print('Title: '+ placeName)

print('first 10 links: ')
print(page_object.coordinates)

wikiurl =page_object.url
print(wikiurl)

manorurl = '<a href="' + portal_link + '>Mõisa Poortal - Estonian Manors</a>'
placeName = placeName + "<br>" + manorurl

coords = str(page_object.coordinates)

x = re.search(".*(\d{2}\.\d{8}).*(\d{2}\.\d{8}).*", coords)
lat = x.group(1)
print(lat)

long = x.group(2)
print(long)
geoj = Point((float(long), float(lat)))


print(placeName)

albu = Feature(geometry=geoj, properties={"popupContent": placeName, "Country: ": "Eesti"})
print(str(albu))