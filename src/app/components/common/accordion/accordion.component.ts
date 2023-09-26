import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqService } from 'src/app/services/faq.service';
import { FAQType } from 'src/app/types/faq.type';

@Component({
  selector: 'accordion-component',
  standalone: true,
  imports: [CommonModule, NgbAccordionModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  accordionItems: FAQType[] = [];
  
  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.accordionItems = this.faqService.getFAQ();
  }
}
