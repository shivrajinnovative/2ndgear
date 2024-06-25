import React, { useEffect, useState } from "react";
import "./productDetail.css";
import Product from "./components/Product";
import EnquiryForm from "./components/EnquiryForm";
import PlantDetail from "./components/PlantDetail";
import InspectionReports from "./components/InspectionReports";
import RelatedEquipments from "./components/RelatedEquipments";
import { useParams } from "react-router-dom";
import { useDynamicQuery } from "../../utils/apiUtils";

export default function ProductDetail() {
  const { slug } = useParams();
  const [equipment, setEquipment] = useState([]);
  const [equipDetails, setEquipDetails] = useState([]);
  const [equipGallery, setEquipGallery] = useState([]);
  const [equipReports, setEquipReports] = useState([]);

  const { data, error, isLoading } = useDynamicQuery(
    [`equipment-detail-${slug}`],
    `get-equip-details/${slug}`
  );
  const [click, setClick] = useState(true);

  useEffect(() => {
    if (data) {
      setEquipment(data.otherEquipDetails);
      setEquipDetails(data.equipDetails[0]);
      setEquipGallery(data.equipGallery);
      setEquipReports(data.equipReports);
    }
  }, [data, slug]);
  return (
    <section className="bg-light pt-5 produtDetail">
      {equipment && (
        <div className="container pt-5">
          <div className="row pt-md-5">
            <div className="col-lg-7">
              <Product
                isLoading={isLoading}
                price={equipDetails.indequip_price}
                sub_equip_cat_name={equipment.sub_equip_cat_name}
                equipGallery={equipGallery}
                indequip_brand={equipDetails.indequip_brand}
              />
            </div>
            <div className="col-lg-5">
              <EnquiryForm hashed={equipment.hashed}  sentEnquiryTo={equipment.sentEnquiryTo} />
            </div>
            <div className="my-5">
              <div className="card rounded-4">
                <div className="poppins fw-500 m-3 d-flex border-bottom ">
                  <div className="position-relative">
                    <span
                      type="button"
                      className={`p-3 ${
                        click ? "text-primary active" : "text-secondary"
                      } `}
                      onClick={() => setClick(true)}
                    >
                      Plants Detail's
                    </span>
                  </div>
                  <div className="position-relative">
                    <span
                      type="button"
                      className={`p-3 ${
                        !click ? "text-primary active" : "text-secondary"
                      } `}
                      onClick={() => setClick(false)}
                    >
                      Inspection Report’s
                    </span>
                  </div>
                </div>
                {click ? (
                  <PlantDetail equipment={equipDetails} />
                ) : (
                  <InspectionReports equipReports={equipReports} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <div className="container">
        <RelatedEquipments />
      </div> */}
    </section>
  );
}
