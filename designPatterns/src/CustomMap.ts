import { User } from "./User";
import { Company } from "./Company";

export interface Mappable {
    location: {
        lat: number,
        lng: number,
    },
    markerContent(): string,
    color: string
}

export class CustomMap {
  private googleMap: google.maps.Map;

  /**
   * 
   * @param divId 
   */
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 4,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  public addMarker(mappable: Mappable ): void{
    // creating an object from the matker class
    const marker = new google.maps.Marker({ map: this.googleMap, position: {
        lat: mappable.location.lat, lng: mappable.location.lng
    }})

    marker.addListener('click', () => this.showPopUp(mappable.markerContent(), marker))
  }

  private showPopUp(content: string|Element|null, marker: google.maps.Marker): void {
    const infoWindow = new google.maps.InfoWindow({ content });

    infoWindow.open(this.googleMap, marker);
  }
}
