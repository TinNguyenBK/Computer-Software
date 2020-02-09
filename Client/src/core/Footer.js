import React from "react";

const FooterPage = () => {
  return (
    <div className="container mt-5">
        <div className="row bg-gray" id="contact">
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
                <h5>GIỚI THIỆU</h5>
                <div className="list-group list-group-flush">
                    <a href="#" className="footeritems">Trang chủ</a>
                    <a href="#" className="footeritems">Về Bách Khoa Computer</a>
                    <a href="#" className="footeritems">Điều khoản giao dịch</a>
                    <a href="#" className="footeritems">Bảo mật thông tin</a>
                    <a href="#" className="footeritems">Tuyển dụng</a>
                </div> 
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
                <h5>CHÍNH SÁCH CÔNG TY</h5>
                <div className="list-group list-group-flush">
                    <a href="#" className="footeritems">Chính sách giao nhận</a>
                    <a href="#" className="footeritems">Chính sách đổi trả hàng</a>
                    <a href="#" className="footeritems">Phương thúc thanh toán</a>
                    <a href="#" className="footeritems">Chế độ bảo hành</a>
                </div> 
            </div>


            <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
                <h5>HỖ TRỢ KHÁCH HÀNG</h5>
                <div className="list-group list-group-flush">
                    <a href="#" className="footeritems">Bảo hành (028)123456</a>
                    <a href="#" className="footeritems">Gửi yêu cầu bảo hành</a>
                    <a href="#" className="footeritems">Gửi yêu cầu đổi hàng</a>
                    <a href="#" className="footeritems">P. Kinh doanh: sales@memoryzone.com.vn</a>
                    <a href="#" className="footeritems">P. Hỗ trợ khách hàng: support@memoryzone.com.vn</a>
                </div> 
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-12 text-justify">
                <h5>BÁCH KHOA COMPUTER</h5>
                <div className="list-group list-group-flush">
                    <a href="#" className="footeritems">HỒ CHÍ MINH: 4C Đồng Xoài, Phường 13, Quận Tân Bình</a>
                    <a href="#" className="footeritems">Điện thoại: (028) 7301 3878 - DĐ: 0909 305 350</a>
                    <a href="#" className="footeritems">Mở cửa: 9h đến 20h, Chủ nhật 10h đến 16h</a>
                </div> 
            </div>
        </div>
    </div>
  );
}

export default FooterPage;