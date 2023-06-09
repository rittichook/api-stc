import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { Content } from './entities/content.entity';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}


  @Get()
  getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.contentService.getUsers());
      }, 3000); // Delay of 1 second
    });
  }

  @Get('/test-profile')
  findAll(): string {
    setTimeout(() => {
      return {
        "avatar": "https://doc-0g-as-docs.googleusercontent.com/docs/securesc/d0agjbi4e1db9lo5l6b3oscd7nebkm2p/rct5958s40ivugd1tr67k3h735nl6gvc/1686289050000/16231169358167985590/09022856557744057242/1-G7ubpkt_duQYzGSczxKT_PtS4G7HIv5?ax=ADWCPKD2GyIQWVJlEAy3IopSDMkK6Vu1KvnAWAHf_AsXoOQmbpJeV2f25Qr5TPdboPA1bV-Qn_yJ5V-7HLI3zdDUuLtPBXMf822qu3f1gtVDSY92Ty1UNRHDwRsicZelP4Jiz-IHbWcNl1hYNC7j13_eBYqOrLomwO_w0HXeBg1rPt46-iQdvNZwxqWmzw1CKzE2_VnbIiEYzs17KMxk7dFUXHKy2-kcSI2fmMuJaxsnfI04WDXInSfuwmIijnxI2wUScGZB_rYmHR1cSo2jwsrZa8aEKPhWaVrCVWlLtd1yLoyh7NJue0tv8_zs9DKuZSWuDPjt01mDsmDqTdKNpcNC3_maJas79cGLhq3TAP5MOauO2vN8Z5CronfbYF1ixjZDBS5GO5mORgOMFH2I8Kp2OBx6pTkAdYk3KmSEDT9nMImzmXPjVW4IIHFQ6V6BVmzNOTQJ8q4N8NSaigUTn5SNeYZW3kSN0DlWCvomSbXC_Y-MGSbMmy3DuAqreOo02Op7Ao-eHeyYM5U6340KVkQGg1lcay9nkfHqZ6DHa7wjRM_R9RNt4xReWfPhMuc0ctOANy0_I0xrLEhDCOIGkkAEIjQTwwoqX6gtUtFzeTJ8lj8J91nzzUK4e5Ot3tAffZ6iYsFcVDZ0oqpsW_CLXYTavVfmSIlxpx3Iqsa0mqYxBZQ2XC-aKvYg7LEwDKVka5sQU-PHSO6ya-GKT6cu7Lf-M7xhlJ7tPRmCY8d9FAqPqLmi1UHhGdu4ahuqcsAOeCVKOcfXEQW85oDeKVWwQqzLSCx2KScYkQr52kLkl-VHN0SxINoXdZOVmLEN-TzI84aZWytfGMihho6hSx1o9M8aXSaiip2SbzNFCsTOsoeQDai5zUE1J8Wchz43cnLUrBQaGf54qLbIInmqoE650oSq_6NbvWvm40_5bEbzMro&uuid=ce18080e-0670-4bd9-bf54-363c442e0273&authuser=0&nonce=k84djd3h5kuhg&user=09022856557744057242&hash=7oo187n8q9ff3plfaosj8v51i28r0c0j",
        "score": "10,139",
        "gpa": "3.50",
        "firstName": "สุดาวดี",
        "lastName": "ประเสริฐโสม",
        "idStudent": "66001121008",
        "faculty": "วิศวกรรมศาสตร์และเทคโนโลยี",
        "department": "เทคโนโลยียานยนต์สมัยใหม่",
        "phonenumber": "0912345678",
        "email": "sudawadeep@gmail.com",
        "birthDay": "10/01/2001",

      }      
    }, 1000);
  
    // Return a default or placeholder value here
    return '';
  }
  
  
  

  @Post()
  addContent(@Body() content: Content) {
    return this.contentService.addContent(content);
  }

  // Rest of the controller methods...
}
