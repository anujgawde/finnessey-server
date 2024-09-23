import { Body, Controller, Post } from '@nestjs/common';
import { AggregatorService } from './aggregator.service';
import axios from 'axios';

@Controller('aggregator')
export class AggregatorController {
  constructor(private readonly aggregatorService: AggregatorService) {}

  // TODO: Define data models:

  @Post('request-consent')
  async requestConsent(@Body() consentData: any) {
    const baseURL = `${process.env.ONEMONEY_BASE_URL}/requestconsent`;

    const data = {
      consentData,
      productID: process.env.PRODUCT_ID,
    };

    const result = await axios.post(baseURL, data, {
      headers: {
        'Content-Type': 'application/json',
        client_secret: process.env.ONEMONEY_CLIENT_SECRET,
        organisationId: process.env.ORG_ID,
        client_id: process.env.CLIENT_ID,
        appIdentifier: process.env.APP_IDENTIFIER,
      },
    });
    console.log(result.data.data.consent_handle);

    return result.data.data.consent_handle;
  }

  @Post('redirect')
  async webRedirection(@Body() requestData: any) {
    try {
      const data = {
        redirectUrl: process.env.REDIRECTION_URL,
        userid: requestData.userId,
        consentHandle: requestData.consentHandle,
      };

      const result = await axios.post(
        `${process.env.ONEMONEY_BASE_URL}/webRedirection/getEncryptedUrl`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            client_secret: process.env.ONEMONEY_CLIENT_SECRET,
            organisationId: process.env.ORG_ID,
            client_id: process.env.CLIENT_ID,
            appIdentifier: process.env.APP_IDENTIFIER,
          },
        },
      );
      return result.data.data.webRedirectionUrl;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  @Post('consent-list')
  async getConsentList(@Body() consentData: any) {
    try {
      const data = {
        mobileNumber: consentData.mobileNumber,
        productID: process.env.PRODUCT_ID,
        accountID: process.env.ACCOUNT_ID,
        status: process.env.STATUS,
      };

      const result = await axios.post(
        `${process.env.ONEMONEY_BASE_URL}/getconsentslist`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            client_secret: process.env.ONEMONEY_CLIENT_SECRET,
            organisationId: process.env.ORG_ID,
            client_id: process.env.CLIENT_ID,
            appIdentifier: process.env.APP_IDENTIFIER,
          },
        },
      );
      return result.data.data;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
